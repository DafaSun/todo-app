import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import ToDoComponent from '../components/ToDoComponent/ToDoComponent';

describe('ToDo App', () => {
    test('добавление задачи', async () => {
        const taskName = 'Test Task ' + new Date().toISOString();
        render(<ToDoComponent />);
        const input = screen.getByPlaceholderText(/Enter a new task/i);
        fireEvent.change(input, { target: { value: taskName } });
        const button = screen.getByRole('button', { name: /add/i }); // можно короче: /add/i
        fireEvent.click(button);
        const task = await screen.findByText((content) => content.includes(taskName));
        expect(task).toBeInTheDocument();
    });

    test('удаление задачи по имени', async () => {
        const uniqueTaskName = 'delete-' + new Date().toISOString();
        render(<ToDoComponent/>);
        const input = screen.getByPlaceholderText(/Enter a new task/i);
        fireEvent.change(input, {target: {value: uniqueTaskName}});
        const addButton = screen.getByRole('button', {name: /add/i});
        fireEvent.click(addButton);
        const task = await screen.findByText(uniqueTaskName);
        expect(task).toBeInTheDocument();
        const deleteButton = await screen.findByLabelText((label) =>
            label.includes(uniqueTaskName)
        );
        fireEvent.click(deleteButton);
        await waitFor(() => {
            expect(screen.queryByText(uniqueTaskName)).not.toBeInTheDocument();
        });
    });
});
