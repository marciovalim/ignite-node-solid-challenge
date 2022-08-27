import { Request, Response } from 'express';

import { TurnUserAdminUseCase } from './TurnUserAdminUseCase';

class TurnUserAdminController {
	constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

	handle(request: Request, response: Response): Response {
		const userId = request.params.user_id;

		try {
			const user = this.turnUserAdminUseCase.execute({ userId });
			return response.json(user);
		} catch (error) {
			if (error.message.includes('User not found')) {
				return response.status(404).json({ error: 'User not found' });
			}

			return response.status(400).json({ error: error.message });
		}
	}
}

export { TurnUserAdminController };
