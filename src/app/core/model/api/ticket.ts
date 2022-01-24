import { BaseModel } from './base';
import { AttachmentAPI } from './attachment';
import { CategoryAPI } from './category';
import { StatusAPI } from './status';
import { PriorityAPI } from './priority';
import { TagAPI } from './tag';
import { ClientAPI } from './client';
import { ContactAPI } from './contact';
import { ProjectAPI } from './project';
import { VersionAPI } from './version';
import { SoftwareAPI } from './software';

export interface TicketAPI extends BaseModel {
  attachments: AttachmentAPI[];

  category: CategoryAPI;

  client: ClientAPI;

  contact: ContactAPI;

  creationDate: Date;

  details: string;

  uniqueName: number;

  project: ProjectAPI;

  software: SoftwareAPI;

  softwareVersion: VersionAPI;

  priority: PriorityAPI;

  readonly: boolean;

  status: StatusAPI;

  tag: TagAPI;

  title: string;

  lastStatusDate: Date;

  updateDate: Date;
}
