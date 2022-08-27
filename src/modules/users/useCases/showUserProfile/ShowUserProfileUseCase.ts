import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
	userId: string;
}

class ShowUserProfileUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ userId }: IRequest): User {
		const user = this.usersRepository.findById(userId);
		if (!user) {
			throw new Error('User not found');
		}

		return user;
	}
}

export { ShowUserProfileUseCase };
