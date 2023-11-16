function addEmailAddress() {
    var username = 'me';
    var domain = 'giovanninovati';
    var suffix = 'com';
    
    document.getElementById('contact-email').setAttribute('href', 'mailto:' + username + '@' + domain + '.' + suffix);
}

function printNavbar() {
    document.getElementById('navbar').innerHTML = `
        <div class="row gy-2">
            <div class="col-12 col-sm-6 text-center text-sm-start">
                <a class="user-select-none text-decoration-none my-link my-navbar-text" href="#">Giovanni Novati</a>
            </div>
            <div class="col-12 col-sm-6">
                <div class="row justify-content-center justify-content-sm-end">
                    <div class="col-auto">
                        <a class="user-select-none my-link my-navbar-text" href="http://localhost:5500/about/about.html">About</a>
                    </div>
                    <div class="col-auto">
                        <a class="user-select-none my-link my-navbar-text" href="http://localhost:5500/blog/blog.html">Blog</a>
                    </div>
                    <div class="col-auto">
                        <a id="contact-email" class="user-select-none my-link my-navbar-text">Contacts</a>
                    </div>
                </div>
            </div>
        </div>`;
}