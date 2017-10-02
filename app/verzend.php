<?php
// VALUES FROM THE FORM
$voornaam	= $_POST['voornaam'];
$achternaam		= $_POST['achternaam'];
$telefoon		= $_POST['telefoon'];
$email		= $_POST['email'];
$message	= $_POST['vragenopmerkingen'];

// ERROR & SECURITY CHECKS
if ( ( !$email ) ||
    ( strlen($_POST['email']) > 200 ) ||
    ( !preg_match("#^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$#", $email) )
)
{
    print "Error: Invalid E-Mail Address";
    exit;
}
if ( ( !$voornaam) ||
    ( strlen($voornaam) > 100 ) ||
    ( preg_match("/[:=@\<\>]/", $voornaam) )
)
{
    print "Error: Invalid  First Name";
    exit;
}
if ( ( !$achternaam) ||
    ( strlen($achternaam) > 100 ) ||
    ( preg_match("/[:=@\<\>]/", $achternaam) )
)
{
    print "Error: Invalid Name";
    exit;
}
if ( preg_match("#cc:#i", $message, $matches) )
{
    print "Error: Found Invalid Header Field";
    exit;
}
if ( !$message )
{
    print "Error: No Message";
    exit;
}

// CREATE THE EMAIL
$headers	= "Content-Type: text/plain; charset=iso-8859-1\n";
$headers	= "From: $name  <$email>\n";
$recipient	= "info@funzigedesigns.nl";
$subject	= "Email via Contact-form";
$message =
    "Contact gegevens:\n
Voornaam: $voornaam\n
Achternaam: $achternaam\n
Telefoon: $telefoon\n
Email: $email\n
Vragen/opmerkingen: \n" . wordwrap($message, 1024);


// SEND THE EMAIL TO YOU
//mail($recipient, $subject, stripslashes($msg), $headers);
mail($recipient, $subject, $message, $headers);

// REDIRECT TO THE THANKS PAGE
header("location: /");
?>
