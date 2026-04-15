from flask import Flask, render_template, request, redirect, url_for, flash, session, jsonify
from models import db, Admin, SiteContent, Lead, Project
from werkzeug.utils import secure_filename
import os
import threading
import time
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kavya_solar.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'kavya-solar-secret-key-2026')
app.config['UPLOAD_FOLDER'] = os.path.join('static', 'assets', 'uploads')
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# ============================================
# KEEP-ALIVE SYSTEM - Prevents Render Sleep
# Pings the /health endpoint every 10 minutes
# ============================================
def keep_alive():
    """Background thread that pings the app every 10 minutes to prevent Render free tier sleep."""
    RENDER_URL = os.environ.get('RENDER_EXTERNAL_URL', '')
    if not RENDER_URL:
        print('[Keep-Alive] No RENDER_EXTERNAL_URL found. Skipping keep-alive.')
        return
    
    ping_url = f"{RENDER_URL}/health"
    print(f'[Keep-Alive] Started! Pinging {ping_url} every 10 minutes.')
    
    while True:
        time.sleep(600)  # 10 minutes = 600 seconds
        try:
            response = requests.get(ping_url, timeout=30)
            print(f'[Keep-Alive] Ping OK - Status: {response.status_code}')
        except Exception as e:
            print(f'[Keep-Alive] Ping failed: {e}')

# Start keep-alive thread only in production
if os.environ.get('RENDER'):
    keep_alive_thread = threading.Thread(target=keep_alive, daemon=True)
    keep_alive_thread.start()

db.init_app(app)

# Create Database and Seed Data
with app.app_context():
    db.create_all()
    
    # Start keep-alive thread
    keep_alive_thread = threading.Thread(target=keep_alive, daemon=True)
    keep_alive_thread.start()
    
    seeds = [
        # Global
        {'key': 'site_name', 'value': 'KAVYA SOLAR', 'page': 'global'},
        {'key': 'contact_phone', 'value': '+91 9536099664', 'page': 'global'},
        {'key': 'contact_email', 'value': 'kavyasolarsystem@gmail.com', 'page': 'global'},
        {'key': 'office_address', 'value': 'Buchdi Fatak, Dhandhera - Haridwar (U.K.)', 'page': 'global'},
        
        # Home Page
        {'key': 'home_hero_title', 'value': 'Solar for Every Household', 'page': 'home'},
        {'key': 'home_hero_sub', 'value': 'Get Central Government Subsidy under the PM Surya Ghar Free Electricity Scheme.', 'page': 'home'},
        {'key': 'home_subsidy_amount', 'value': '₹85,800/-', 'page': 'home'},
        {'key': 'home_emi_amount', 'value': '₹1,100/-', 'page': 'home'},
        
        # About Page
        {'key': 'about_hero_title', 'value': 'Expert Solar Installers', 'page': 'about'},
        {'key': 'about_mission', 'value': 'Trusted partner for PM Surya Ghar Yojana in Haridwar.', 'page': 'about'},
        
        # Technology
        {'key': 'tech_partners_sub', 'value': 'Authorized partners of Adani Renewables, Waaree, and Tata Power.', 'page': 'technology'},
        
        # Images
        {'key': 'home_hero_bg', 'value': '/static/assets/hero-solar.jpg', 'page': 'home'},
        {'key': 'projects_hero_bg', 'value': '/static/assets/projects.jpg', 'page': 'projects'}
    ]

    # Ensure all seeds exist in the database even if Admin exists
    for s in seeds:
        existing_content = SiteContent.query.filter_by(key=s['key']).first()
        if not existing_content:
            new_content = SiteContent(key=s['key'], value=s['value'], page=s['page'])
            db.session.add(new_content)
    
    # Default Admin
    if not Admin.query.first():
        admin = Admin(username='admin')
        admin.set_password('admin123')
        db.session.add(admin)
        
    db.session.commit()

# Context Processor for Global Content
@app.context_processor
def inject_global_content():
    global_content = {}
    items = SiteContent.query.all()
    for item in items:
        global_content[item.key] = item.value
    return dict(content=global_content)

# Main Routes
@app.route('/')
def index():
    projects = Project.query.order_by(Project.page_order.asc()).limit(3).all()
    return render_template('index.html', projects=projects)

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/journey.html')
def journey():
    return render_template('journey.html')

@app.route('/global-presence.html')
def global_presence():
    return render_template('global_presence.html')

@app.route('/leadership.html')
def leadership():
    return render_template('leadership.html')

@app.route('/quality.html')
def quality():
    return render_template('quality.html')

@app.route('/reliability.html')
def reliability():
    return render_template('reliability.html')

@app.route('/products.html')
def products():
    projects = Project.query.order_by(Project.page_order.asc()).all()
    return render_template('products.html', projects=projects)

@app.route('/product-topcon.html')
def product_topcon():
    return render_template('product_topcon.html')

@app.route('/media.html')
def media():
    return render_template('media.html')

@app.route('/news.html')
def news():
    return render_template('news.html')

@app.route('/downloads.html')
def downloads():
    return render_template('downloads.html')

@app.route('/careers.html')
def careers():
    return render_template('careers.html')

@app.route('/contact.html', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        phone = request.form.get('phone')
        new_lead = Lead(name=name, phone=phone)
        db.session.add(new_lead)
        db.session.commit()
        flash('Thank you! We will contact you soon.', 'success')
        return redirect(url_for('contact'))
    return render_template('contact.html')

# Admin Routes
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        admin = Admin.query.filter_by(username=username).first()
        if admin and admin.check_password(password):
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        flash('Invalid Credentials', 'danger')
    return render_template('admin_login.html')

@app.route('/admin/dashboard')
def admin_dashboard():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    leads = Lead.query.order_by(Lead.created_at.desc()).all()
    all_content = SiteContent.query.all()
    projects = Project.query.order_by(Project.page_order.asc()).all()
    return render_template('admin_dashboard.html', leads=leads, all_content=all_content, projects=projects)

@app.route('/admin/add_project', methods=['POST'])
def add_project():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    title = request.form.get('title')
    image_path = request.form.get('image_path')
    description = request.form.get('description')
    
    if 'image_file' in request.files:
        file = request.files['image_file']
        if file and file.filename != '':
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            image_path = url_for('static', filename=f'assets/uploads/{filename}')
            
    if not image_path:
        image_path = "https://via.placeholder.com/400x300?text=No+Image"
    
    new_project = Project(title=title, image_path=image_path, description=description)
    db.session.add(new_project)
    db.session.commit()
    flash('Project Added Successfully!', 'success')
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/delete_project/<int:id>')
def delete_project(id):
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    project = Project.query.get_or_404(id)
    db.session.delete(project)
    db.session.commit()
    flash('Project Deleted Successfully!', 'warning')
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/update_content', methods=['POST'])
def update_content():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    
    for key, value in request.form.items():
        content = SiteContent.query.filter_by(key=key).first()
        if content:
            content.value = value
            
            # Check for file upload corresponding to this key
            file_key = f'image_file_{key}'
            if file_key in request.files:
                file = request.files[file_key]
                if file and file.filename != '':
                    filename = secure_filename(file.filename)
                    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                    file.save(file_path)
                    content.value = url_for('static', filename=f'assets/uploads/{filename}')
    db.session.commit()
    flash('Settings Updated Successfully!', 'success')
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/logout')
def admin_logout():
    session.pop('admin_logged_in', None)
    return redirect(url_for('index'))

# ============================================
# HEALTH CHECK ENDPOINT - Used by Keep-Alive
# ============================================
@app.route('/health')
def health_check():
    return jsonify({'status': 'alive', 'app': 'Kavya Solar'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5001)
