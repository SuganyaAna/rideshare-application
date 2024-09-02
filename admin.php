<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/user.class.php';
$ops=new Operations();
$result=$ops->getTable('rides');
// print_r($result)
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Office Commute App</title>
    <link rel="stylesheet" href="style.css">
    <script src="app.js" defer></script>
</head>

<body>
    <header>
        <h1>Ride Bookings</h1>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="" id="profileNav">Profile</a></li>
                <li><a href="logout.php">Log Out</a></li>

            </ul>
        </nav>
    </header>

    <main>
      
<section>
    <div>
    
    <table>
    <thead>
        <tr>
            <?php 
            foreach ($result[0] as $key => $value) {
                echo "<th>" . htmlspecialchars($key) . "</th>";
            }
            ?>
        </tr>
    </thead>
    <tbody>
    <?php 
    foreach ($result as $row) {
        echo "<tr>";
        foreach ($row as $data) {
            echo "<td>" . htmlspecialchars($data) . "</td>";
        }
        echo "</tr>";
    }
    ?>
    </tbody>
</table>


    </table>
 
    </div>
</section>

     
    </main>

    <footer>
        <p>&copy; 2024 Office CommuteApp</p>
    </footer>
    <script src="script.js"></script>
    <!--<script src="calender.js"></script>-->
</body>

</html>