<?php
header("Content-Type: application/json");

echo json_encode([
  "message" => "✅ PHP API is running!",
  "status" => "OK",
  "timestamp" => date("Y-m-d H:i:s")
]);
?>