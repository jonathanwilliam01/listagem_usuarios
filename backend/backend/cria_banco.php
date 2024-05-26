<?php
// Caminho para o arquivo do banco de dados SQLite
$db_path = 'processo.db';

// Cria (ou abre, se já existir) o banco de dados
$db = new SQLite3($db_path);

// Cria uma tabela
$db->exec('
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT
)
');

// Insere dados na tabela
$db->exec("
INSERT INTO usuarios (nome, email)
VALUES ('TESTE', 'TESTE@embras.net')
");


// Consulta dados
$result = $db->query('SELECT * FROM usuarios');
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo "ID: " . $row['id'] . " - Nome: " . $row['nome'] . " - Email: " . $row['email'] . "<br>";
}

// Fecha a conexão
$db->close();
?>
