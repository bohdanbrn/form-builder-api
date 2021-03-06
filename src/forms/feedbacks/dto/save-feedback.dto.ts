import { IsString, IsNotEmpty } from 'class-validator';
import { Form } from '../../form.entity';

export class SaveFeedbackDto {
    @IsString()
    domainUrl: string;

    @IsNotEmpty()
    form: Form;
}
