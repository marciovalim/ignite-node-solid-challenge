import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
	userId: string;
}

class TurnUserAdminUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ userId }: IRequest): User {
		const user = this.usersRepository.findById(userId);
		if (!user) {
			throw new Error('User not found');
		}

		return this.usersRepository.turnAdmin(user);
	}
}

export { TurnUserAdminUseCase };
