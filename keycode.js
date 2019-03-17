
function get_keycode(event) {
    let key = event.which || event.keycode;
    document.getElementById('show').innerHTML = key;
}