from app import app, db
from models import Lead, SiteContent

with app.app_context():
    leads = Lead.query.all()
    print(f"Total Leads: {len(leads)}")
    for l in leads:
        print(f"- {l.name} ({l.phone}) at {l.created_at}")
    
    home_title = SiteContent.query.filter_by(key='home_hero_title').first()
    print(f"Home Title in DB: {home_title.value if home_title else 'NOT FOUND'}")
