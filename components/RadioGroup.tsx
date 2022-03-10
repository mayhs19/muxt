import * as React from 'react';

import Tooltip from '@mui/material/Tooltip'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CustomRadioGroup({ radioName,valueLabelSet }){
    return(
        <>
        <FormControl>
            
            <FormLabel 
                id="demo-row-radio-buttons-group-label">
                {radioName}
            </FormLabel>

            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                {
                    valueLabelSet && 
                    valueLabelSet.map
                    (eachValueLabel => {
                        const { eachValue, eachLabel } = eachValueLabel
                        return <FormControlLabel value={eachValue} control={<Radio />} label={eachLabel} />
                    })
                }
                <FormControlLabel value="3.9" control={<Radio />} label="3.9" />
                <FormControlLabel value="3.6" control={<Radio />} label="3.6" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <Tooltip title="Python 2.7 is EOL - Starting Jan 1,2020">
                <span>
                <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="2.7"
                />
                </span>
                </Tooltip>
            </RadioGroup>
    </FormControl>
    </>
    )
}