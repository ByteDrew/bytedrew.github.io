function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openBlog(evt, blogName) {
    // Declare all variables
    var i, blogcontent, bloglinks;

    // Get all elements with class="blogContent" and hide them
    blogcontent = document.getElementsByClassName("blogContent");
    for (i = 0; i < blogcontent.length; i++) {
        blogcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    bloglinks = document.getElementsByClassName("blogLinks");
    for (i = 0; i < bloglinks.length; i++) {
        bloglinks[i].className = bloglinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(blogName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openMediaTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="mediaTab" and hide them
    tabcontent = document.getElementsByClassName("mediaTab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
if (document.getElementById("defaultOpen") != null) {
    document.getElementById("defaultOpen").click();
}

// Get the element with id="defaultAltOpen" and click on it
if (document.getElementById("defaultAltOpen") != null) {
    document.getElementById("defaultAltOpen").click();
}

// Get the element with id="blogActive" and click on it
// Get the element with id="defaultAltOpen" and click on it
if (document.getElementById("blogActive") != null) {
    document.getElementById("blogActive").click();
}

// Get the element with id="blogActive" and click on it
// Get the element with id="defaultAltOpen" and click on it
if (document.getElementById("mediaActive") != null) {
    document.getElementById("mediaActive").click();
}
