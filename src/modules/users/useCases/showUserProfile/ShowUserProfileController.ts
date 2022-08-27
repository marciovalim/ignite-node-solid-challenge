import { Request, Response } from 'express';

import { ShowUserProfileUseCase } from './ShowUserProfileUseCase';

class ShowUserProfileController {
	constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

	handle(request: Request, response: Response): Response {
		const userId = request.params.user_id;
		try {
			const user = this.showUserProfileUseCase.execute({ userId });
			return response.json(user);
		} catch (error) {
			if (error.message.includes('User not found')) {
				return response.status(404).json({ error: 'User not found' });
			}

			return response.status(400).json({ error: error.message });
		}
	}
}

export { ShowUserProfileController };
