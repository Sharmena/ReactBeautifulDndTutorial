const initialData = {
    tasks: {
        'task-1': {id: 'task-1'},
        'task-2': {id: 'task-2'},
        'task-3': {id: 'task-3'},
        'task-4': {id: 'task-4'},
        'task-5': {id: 'task-5'},
    },

    columns: {
        'column-1': {id: 'column-1', taskIds: ['task-1','task-2','task-3']},
        'column-2': {id: 'column-2', taskIds: ['task-4']},
        'column-3': {id: 'column-3', taskIds: ['task-5']}

    },
    columnOrder: ['column-1','column-2','column-3']
};

export default initialData;