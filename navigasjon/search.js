function goToNewPage() {
        var url = document.getElementById('ladepunkt').value;
        if(url != 'none') {
            window.location.href = url;
        }
}