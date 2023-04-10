function send()
{
    var id = document.getElementById("id").value;
    var site = document.getElementById("chnl").value;
    var msg = document.getElementById("msg").value;

    var payload = {
        "content" : msg
    }

        // var s = fetch(site,
        //     {
        //         headers : header,
        //         payload : payload,
        //     })


        var s = fetch(site, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'authorization' : id,
                'Content-Type': 'application/json',
            }
          })
        .then(data => console.log(data))
        .then(function(){
            document.getElementById("msg").value = null;
        })
        .catch(err => console.log("error: ", err))
}