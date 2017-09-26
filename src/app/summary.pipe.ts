import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: number) {
        if (!value) {
            return 'greska';
        }
        const actualLimit = (limit) ? limit : 10;
        return value.substr(0, actualLimit) + '...';
    }

}