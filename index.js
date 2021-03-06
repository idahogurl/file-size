function submitForm()
{
    debugger;
    var resultArea = document.getElementById("result");
    var fileInput = document.getElementById("file");
    if (fileInput.files.length == 0)
    {
        resultArea.className = "alert alert-danger";
        resultArea.innerHTML = "Error: You must select a file";
        return false;
    }

    var data = new FormData(document.getElementById("fileForm"));
    var postUrl = "https://file-size-mb.herokuapp.com/file_size/";
    axios.post(postUrl, data)
    .then(
        function(result)
        {
            resultArea.className = "alert alert-success";
            resultArea.innerHTML = "Your file is " + (result.data.size / 100000).toFixed(1) + " MB";
        },
        function(error)
        {
            resultArea.className = "alert alert-danger";
            resultArea.innerHTML = "Error: Unable to determine file size.";
        }
    );
    return false;
}