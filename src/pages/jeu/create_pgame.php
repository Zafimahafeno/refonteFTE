<?php
// Informations de connexion à la base de données
$servername = "mysql-zanajaona.alwaysdata.net"; // Adresse du serveur de la base de données
$username = "zanajaona"; // Nom d'utilisateur de la base de données
$password = "zanajaona0201."; // Mot de passe de la base de données
$dbname = "zanajaona_fte"; // Nom de la base de données

// Vérifier si un fichier a été uploadé
if (isset($_FILES["image"]) && $_FILES["image"]["error"] === 0) {
    // Chemin du répertoire où stocker les images uploadées
    $targetDir = "uploads/";

    // Vérifier si le répertoire cible existe, sinon le créer
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true);
    }

    // Générer un nom unique pour le fichier en utilisant le nom d'origine et un horodatage
    $uniqueFileName = time() . '_' . $_FILES["image"]["name"];

    // Chemin complet du fichier uploadé
    $targetFile = $targetDir . $uniqueFileName;

    // Déplacer le fichier uploadé vers le répertoire cible
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        // Le fichier a été uploadé avec succès, on enregistre le chemin dans la base de données
        $photo_pg = $targetFile;

        // Connexion à la base de données
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Vérifier la connexion
        if ($conn->connect_error) {
            die("Erreur de connexion à la base de données : " . $conn->connect_error);
        }

        // Récupération des données du formulaire
        $name_pg = $_POST['name_pg'];
        $number_pg = $_POST['number_pg'];
        $mail_pg = $_POST['mail_pg'];
        $phone_pg = $_POST['phone_pg'];
        $name_lg = $_POST['name_lg'];

        // Préparer la requête d'insertion
        $sql = "INSERT INTO participant_game (name_pg, number_pg, photo_pg, mail_pg, phone_pg, name_lg)VALUES ('$name_pg', '$number_pg', '$photo_pg', '$mail_pg', '$phone_pg', '$name_lg')";

        // Exécuter la requête d'insertion
        if ($conn->query($sql) === TRUE) {
            echo '<script>alert("Nous avons enregistré votre inscription dans notre liste, et vous serez contacté par le responsable pour procéder au paiement."); window.location.href = "index.php";</script>';
        } else {
            echo "Erreur lors de l'ajout des données : " . $conn->error;
        }

        // Fermer la connexion
        $conn->close();
    } else {
        echo "Erreur lors de l'upload du fichier.";
    }
}
?>