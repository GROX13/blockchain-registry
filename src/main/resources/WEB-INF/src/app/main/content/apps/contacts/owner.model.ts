import {FuseUtils} from '@fuse/utils/index';
import {Record} from "./record.model";

export class Owner {
	id: string;
	avatar: string;
	personalId: string;
	records: Record[];
	purchaseDate: string;
	ownedUntilDate: string;
	purchaseLocation: string;
	estimatedKilometersPerYear: string;

	constructor(owner) {
		{
			this.id = FuseUtils.generateGUID();
			this.avatar = 'assets/images/avatars/profile.jpg';
			this.personalId = owner.personalId || '';
			this.records = owner.records || [];
			this.purchaseDate = owner.purchaseDate || '';
			this.ownedUntilDate = owner.ownedUntilDate || '';
			this.purchaseLocation = owner.purchaseLocation || '';
			this.estimatedKilometersPerYear = owner.estimatedKilometersPerYear || '';
		}
	}
}
