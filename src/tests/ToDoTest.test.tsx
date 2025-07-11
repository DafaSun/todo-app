import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import ToDoComponent from '../components/ToDoComponent/ToDoComponent';

describe('ToDo App', () => {
    // test('добавление задачи', async () => {
    //     render(<ToDoComponent />);
    //
    //     const input = screen.getByPlaceholderText(/Enter a new task/i);
    //     fireEvent.change(input, { target: { value: 'Test Task' } });
    //
    //     const button = screen.getByRole('button', { name: /add task/i });
    //     fireEvent.click(button);
    //
    //     const tasks = await screen.findAllByText('Test Task');
    //     expect(tasks.length).toBeGreaterThan(0);
    // });


    test('удаление задачи', async () => {
        render(<ToDoComponent />);

        // Вводим задачу
        const input = screen.getByPlaceholderText(/Enter a new task/i);
        fireEvent.change(input, { target: { value: 'Delete Me' } });

        const addButton = screen.getByRole('button', { name: /Add/i });
        fireEvent.click(addButton);

        // Ждём, пока задача с текстом отобразится
        const taskElement = await screen.findByText('Delete Me');

        // Находим контейнер задачи — ближайший div или с классом, если есть
        const taskContainer = taskElement.closest('div');
        expect(taskContainer).toBeInTheDocument();

        // Внутри контейнера ищем кнопку удаления по aria-label
        const deleteButton = within(taskContainer!).getByLabelText(/delete task/i);

        // Кликаем по кнопке удаления
        fireEvent.click(deleteButton);

        // Проверяем, что задача исчезла
        await waitFor(() => {
            expect(screen.queryByText('Delete Me')).not.toBeInTheDocument();
        });
    });
});
