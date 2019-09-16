import { TaskStatus } from './../task.model';
import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = Object.values(TaskStatus);
    transform(value: any, metadata: ArgumentMetadata) {

        value = (value as string).toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`"${value}" is  an invalid status`);
        }
    }

    private isStatusValid(status: any) {
        const index = this.allowedStatuses.indexOf(status);
        return index !== -1;
    }
}
