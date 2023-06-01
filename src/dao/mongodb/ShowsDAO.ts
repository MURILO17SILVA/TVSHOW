import { inject, injectable } from 'inversify';
import { Db } from 'mongodb';
import { TYPES } from '../../injections/types';
import { Show } from '../../models/show';
import { GenericDAO } from './GenericDAO';
import { ShowsDAO } from './showDAO';


@injectable()
export class  extends GenericDAO<Show> implements ShowsDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super();
    this._collection = db.collection('users');
  }

  async findByName(ShowsDAO: string): Promise<ShowsDAO[]> {
    const show = await this.find({
      show: {
        $regex: ShowsDAO,
        $options: 'i',
      },
    });

    return ShowsDAO;
  }
}
