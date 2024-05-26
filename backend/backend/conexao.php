<?php
class Database {
    private $db_path = 'processo.db';
    private $connection;

    // Construtor: abre a conexão
    public function __construct() {
        $this->connect();
    }

    // Destrutor: fecha a conexão
    public function __destruct() {
        $this->disconnect();
    }

    // Método para conectar ao banco de dados
    private function connect() {
        $this->connection = new SQLite3($this->db_path);
        if (!$this->connection) {
            die("Erro ao conectar ao banco de dados: " . $this->connection->lastErrorMsg());
        }
    }

    // Método para desconectar do banco de dados
    private function disconnect() {
        if ($this->connection) {
            $this->connection->close();
        }
    }

    // Método para obter a conexão
    public function getConnection() {
        return $this->connection;
    }
}
?>
