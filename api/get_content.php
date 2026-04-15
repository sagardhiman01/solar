<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once 'db.php';

try {
    $stmt = $pdo->query("SELECT * FROM site_content");
    $content = [];
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $content[$row['key']] = $row['value'];
    }
    echo json_encode($content);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
?>
