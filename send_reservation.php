<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Collect form data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $person = strip_tags(trim($_POST["person"]));
    $reservation_date = strip_tags(trim($_POST["reservation-date"]));
    $time = strip_tags(trim($_POST["time"]));
    $message = strip_tags(trim($_POST["message"]));
    
    // Validate that essential fields are not empty
    if (empty($name) || empty($email) || empty($phone) || empty($person) || empty($reservation_date) || empty($time)) {
        echo "Please fill all required fields.";
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please provide a valid email address.";
        exit;
    }

    // Prepare the email content
    $to = "khullarakshay723@gmail.com"; // Your email address where the reservation will be sent
    $subject = "New Table Reservation Request";
    
    $email_content = "You have received a new reservation request:\n\n";
    $email_content .= "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Number of People: $person\n";
    $email_content .= "Reservation Date: $reservation_date\n";
    $email_content .= "Time: $time\n";
    $email_content .= "Message: $message\n";

    // Email headers
    $headers = "From: noreply@yourwebsite.com\r\n";  // Set this to an appropriate "From" email for your domain
    $headers .= "Reply-To: $name <$email>\r\n"; // Set the user's email in "Reply-To"
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Display a success message or redirect to a thank you page
        echo "Thank you! Your reservation request has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your request.";
    }
} else {
    // Redirect if accessed directly without form submission
    header("Location: index.html");
    exit;
}
?>
