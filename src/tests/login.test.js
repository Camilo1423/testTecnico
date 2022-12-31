test('submits username and password', async () => {

    // ARRANGE
    const username = "myusername";
    const password = "pass1234";
    const mockLogin = jest.fn();

    render(<Login onSubmit={mockLogin(username, password)} />);

    const usernameInput = screen.getByRole('textbox', { name: /Username/i });
    userEvent.type(usernameInput, 'myusername');
    const passwordInput = screen.getByLabelText('Password');
    userEvent.type(passwordInput, 'pass1234');
    const loginButton = screen.getByRole('button', { name: /^Log in$/i });
    expect(loginButton).not.toBeDisabled();

    // ACT
    userEvent.click(loginButton);

    // ASSERT
    await expect(mockLogin).toHaveBeenCalled();
    await expect(mockLogin).toHaveBeenCalledTimes(1);
    await expect(mockLogin).toHaveBeenCalledWith("myusername", "pass1234");
  });
