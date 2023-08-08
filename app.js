const express = require('express');
const moment = require('moment');
const suncalc = require('suncalc');

const app = express();

app.get('/moonphase', function (req, res) {
    const now = moment().toDate();
    const moonIllumination = suncalc.getMoonIllumination(now);
    const phase = moonIllumination.phase;
    const phaseName = getPhaseName(phase);
    res.json({ 
        'moon_phase': phaseName,
        'phase_num':phase
 });
});

app.listen(4000, function () {
    console.log('Moon phase API listening on port 4000');

});

function getPhaseName(phase) {
    if (phase == 0 || phase == 1) {
        return "New Moon";
    } else if (phase < 0.25) {
        return "Waxing Crescent";
    } else if (phase == 0.25) {
        return "First Quarter";
    } else if (phase < 0.5) {
        return "Waxing Gibbous";
    } else if (phase == 0.5) {
        return "Full Moon";
    } else if (phase < 0.75) {
        return "Waning Gibbous";
    } else if (phase == 0.75) {
        return "Last Quarter";
    } else {
        return "Waning Crescent";
    }
}

