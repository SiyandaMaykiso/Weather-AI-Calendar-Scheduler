var activityElement = document.querySelector(".backcontainer p");

$("#form").on("submit", function(event) {
    event.preventDefault();
    var newActivity = {
        ACTIVITY: $("#name").val(),
        TEMP: weather.temperature.value
    };

    $.post("/api/activities", newActivity)
        .then(function() {
            alert(`Adding post...${newActivity.ACTIVITY}`);
        });
    $("#name").val("");
});

$(".front").on("click", function(event) {
    event.preventDefault();
    $.get("/api/activities/" + weather.temperature.value)
        .then(function(data) {
            activityElement.innerHTML = `${data.ACTIVITY}`;
        });
});

$('#delete-btn').on("click", function (event) {
    event.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "/api/activities/" + weather.temperature.value
    }).then(function(){
        activityElement.innerHTML = ""
    })
});
