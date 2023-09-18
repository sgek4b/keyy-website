function promptalert() {
    if (confirm("Do you want to open this website in an about:blank page? \ Press ok to open website in a blank tab! \ Press Cancel to continue to normal website!")) {
        txt = "You pressed OK!";
        blank();
    } 
    else {
        txt = "You pressed Cancel!";
    }
    console.log(txt);
}