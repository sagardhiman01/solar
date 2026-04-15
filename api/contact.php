<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (isset($data['name']) && isset($data['phone'])) {
        $name = $data['name'];
        $phone = $data['phone'];

        try {
            $stmt = $pdo->prepare("INSERT INTO leads (name, phone) VALUES (?, ?)");
            $stmt->execute([$name, $phone]);
            echo json_encode(["status" => "success", "message" => "Lead saved successfully"]);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Name and phone are required"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
