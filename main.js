$(document).ready(function() {
    // Função para adicionar uma tarefa
    function addTask(taskName) {
        var listItem = $('<li>' + taskName + '</li>');
        listItem.click(function() {
            $(this).toggleClass('completed');
        });
        $('#task-list').append(listItem);
    }

    // Manipulador de evento para o formulário de adicionar tarefa
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskName = $('#task-input').val();
        if (taskName) {
            addTask(taskName);
            $('#task-input').val('');
        }
    });
})