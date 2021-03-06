import TumorColumnFormatter from './TumorColumnFormatter';
import React from 'react';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import {GENETIC_PROFILE_MUTATIONS_SUFFIX, GENETIC_PROFILE_UNCALLED_MUTATIONS_SUFFIX} from '../../../../shared/constants';

describe('TumorColumnFormatter', () => {

    before(()=>{

    });

    after(()=>{

    });

    it('test get present samples', ()=>{
        let testData = [
            {sampleId:'A',
             geneticProfileId:GENETIC_PROFILE_MUTATIONS_SUFFIX
            },
            {sampleId:'B',
             geneticProfileId:GENETIC_PROFILE_UNCALLED_MUTATIONS_SUFFIX,
             tumorAltCount: 0,
            },
            {sampleId:'C',
             geneticProfileId:GENETIC_PROFILE_UNCALLED_MUTATIONS_SUFFIX,
             tumorAltCount: 5,
            },
        ];
        let presentSamples = TumorColumnFormatter.getPresentSamples(testData);
        assert(presentSamples['A'], "sample A is present and is called");
        assert(!('B' in presentSamples), "sample B mutation is not present because it has 0 supporting reads");
        assert(presentSamples['C'] === false, "sample C mutation is present and is uncalled with > 0 supporting reads");
    });

});
