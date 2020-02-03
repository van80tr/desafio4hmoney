<?php 
namespace Src\bd;
class Crud 
{
    const HOSTNAME = "127.0.0.1";
	const USERNAME = "root";
	const PASSWORD = "";
    const DBNAME = "etapa1";


    private $conn;


    public function __construct()
    {
        
        
		$this->conn = new \PDO(
			"mysql:dbname=".Crud::DBNAME.";host=".Crud::HOSTNAME, 
			Crud::USERNAME,Crud::PASSWORD
		);

      
    }

    private function setParams($statement, $parameters = array())
	{

		foreach ($parameters as $key => $value) {
			
			$this->bindParam($statement, $key, $value);

		}

    }
    
    private function bindParam($statement, $key, $value)
	{

		$statement->bindParam($key, $value);

    }
    
    // insert , update e delete
    public function query($rawQuery, $params = array())
	{

		$stmt = $this->conn->prepare($rawQuery);

		$this->setParams($stmt, $params);

        $stmt->execute();
        

    }
    
    // Select
    public function select($rawQuery, $params = array())
	{

		$stmt = $this->conn->prepare($rawQuery);

		$this->setParams($stmt, $params);

		$stmt->execute();

		return $stmt->fetchAll(\PDO::FETCH_ASSOC);

	}

}