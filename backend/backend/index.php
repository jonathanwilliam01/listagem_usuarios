<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include 'conexao.php';

$method = $_SERVER['REQUEST_METHOD'];
$db = new Database();
$connection = $db->getConnection();

switch ($method) {
    case 'GET':
        // Consultar dados
        $result = $connection->query('SELECT * FROM usuarios');
        $usuarios = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $usuarios[] = $row;
        }
        echo json_encode($usuarios);
        break;
    
    case 'POST':
        // Inserir dados
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $connection->prepare('INSERT INTO usuarios (nome, email) VALUES (:nome, :email)');
        $stmt->bindValue(':nome', $data['nome'], SQLITE3_TEXT);
        $stmt->bindValue(':email', $data['email'], SQLITE3_TEXT);
        $stmt->execute();
        echo json_encode(['message' => 'Usuário criado com sucesso']);
        break;
    
    case 'DELETE':
        // Excluir dados
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $connection->prepare('DELETE FROM usuarios WHERE id = :id');
        $stmt->bindValue(':id', $data['id'], SQLITE3_INTEGER);
        $stmt->execute();
        echo json_encode(['message' => 'Usuário excluído com sucesso']);
        break;
    
    default:
        echo json_encode(['message' => 'Método não suportado']);
        break;
}

$connection->close();
?>
