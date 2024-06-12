$(document).ready(function() {
    // Complete task
    $('#taskList').on('click', '.complete-task', function() {
        const taskId = $(this).closest('li').data('id');
        $.ajax({
            url: `/complete/${taskId}`,
            type: 'POST',
            success: function() {
                $(`li[data-id=${taskId}]`).addClass('completed');
            },
            error: function() {
                alert('Error completing task.');
            }
        });
    });

    // Delete task
    $('#taskList').on('click', '.delete-task', function() {
        const taskId = $(this).closest('li').data('id');
        $.ajax({
            url: `/delete/${taskId}`,
            type: 'POST',
            success: function() {
                $(`li[data-id=${taskId}]`).remove();
            },
            error: function() {
                alert('Error deleting task.');
            }
        });
    });

    // Prevent form submission from reloading the page
    $('#addTaskForm').on('submit', function(e) {
        e.preventDefault();
        const formData = $(this).serialize();
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            success: function(response) {
                $('#taskList').append(
                    `<li class="list-group-item" data-id="${response.id}">
                        ${response.title}
                        <button class="btn btn-success btn-sm complete-task">Complete</button>
                        <button class="btn btn-danger btn-sm delete-task">Delete</button>
                    </li>`
                );
                $('#addTaskForm')[0].reset();
            },
            error: function() {
                alert('Error adding task.');
            }
        });
    });
});
