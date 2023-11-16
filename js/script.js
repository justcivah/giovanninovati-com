function addEmailAddress() {
    var username = 'me';
    var domain = 'giovanninovati';
    var suffix = 'com';
    
    document.getElementById('contact-email').setAttribute('href', 'mailto:' + username + '@' + domain + '.' + suffix);
}