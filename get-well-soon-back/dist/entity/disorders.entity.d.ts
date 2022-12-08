import { Advices } from './advices.entity';
import { Apps } from './apps.entity';
import { Articles } from './articles.entity';
import { Clinics } from './clinics.entity';
import { Podcasts } from './podcasts.entity';
import { Psychiatrists } from './psychiatrists.entity';
import { Psychologist } from './psychologist.entity';
import { Tests } from './tests.entity';
export declare class Disorders {
    id_disorder: number;
    name: string;
    description: string;
    link: string;
    advices: Advices[];
    apps: Apps[];
    articles: Articles;
    clinics: Clinics[];
    podcasts: Podcasts;
    psychiatrists: Psychiatrists[];
    psychologists: Psychologist[];
    tests: Tests;
}
