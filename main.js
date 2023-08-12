$(document).ready(function() {

    function addTask(taskName) {
        var listItem = $('<li>' + taskName + '</li>');
        listItem.click(function() {
            $(this).toggleClass('completed');
        });
        $('#task-list').append(listItem);
    }


    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-input').val();
        if (taskName) {
            addTask(taskName);
            $('#task-input').val('');
        }
    });
})