var header = document.getElementById('header');
var navigationHeader = document.getElementById('nagivation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSide()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft ='-10vw';
    
    }
    else
    {
        navigationHeader.style.marginLeft='-100vw';
    }
}