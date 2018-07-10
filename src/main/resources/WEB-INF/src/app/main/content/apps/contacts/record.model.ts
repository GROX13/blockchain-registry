import {FuseUtils} from '@fuse/utils/index';

export class Record {
	id: string;
	date: string;
	kilometres: string;
	source: string;
	comments: string;
	nonce: string;
	previousHash: string;
	hash: string;

	constructor(record) {
		{
			this.id = FuseUtils.generateGUID();
			this.date = record.date || '';
			this.kilometres = record.kilometres || '';
			this.source = record.source || '';
			this.comments = record.comments || '';
			this.nonce = record.nonce || '';
			this.previousHash = record.previousHash || '';
			this.hash = record.hash || '';
		}
	}
}
