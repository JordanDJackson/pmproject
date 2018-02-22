module.exports = function desvia(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24) {
/*
    var faults = {
        "Workflow around the problem":0,
        "Outside the scope/authority of the problem owner":0,
        "Description of the bad outcome to be avoided":0,
        "Previous attempts to solve the problem":0,
        "Level of technical readiness":0,
        "Problem // Perception alignment":0,
        "Confidence level":0,
    };
    */
    var faults = {};

      var perfectScore = 86;
      switch (q1) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Owner does not have scope over the problem"] = -1;
          break;
        default:
          break;
      }
      switch (q2) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Owner lacks subject knowledge"] = -1;
          break;
        default:
          break;
      }
      switch (q3) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Owner lacks relevant background"] = -1;
          break;
        default:
          break;
      }
      switch (q4) {
        case '6 or Less':
          perfectScore -= 1.5;
          faults["Owner remaining duration in role"] = -1.5;
          break;
        case 'Between 6 and 12':
          perfectScore -= 1;
          faults["Owner remaining duration in role"] = -1;
          break;
        case 'Between 12 and 24':
          perfectScore -= -0.5;
          faults["Owner remaining duration in role"] = -0.5;
          break;
        case '24+':
          break;
        default:
          break;
      }
      switch (q5) {
        case 'No':
          break;
        case 'Yes':
          perfectScore -= 1;
          faults["Success of problem directly tied to problem owners job"] = -1;
          break;
        default:
          break;
      }
      switch (q6) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 15;
          faults["No senior leader identified"] = -15;
          break;
        default:
          break;
      }
      switch (q7) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["The/One of the senior leaders does not believe it is worth solving"] = -1;
          break;
        default:
          break;
      }
      switch (q8) {
        case '6 or Less':
          perfectScore -= 1.5;
          faults["Senior leader remaining duration in role"] = -1.5;
          break;
        case 'Between 6 and 12':
          perfectScore -= 1;
          faults["Senior leader remaining duration in role"] = -1;
          break;
        case 'Between 12 and 24':
          perfectScore -= -0.5;
          faults["Senior leader remaining duration in role"] = -0.5;
          break;
        case '24+':
          break;
        default:
          break;
      }
      switch (q9) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Senior leader lacks significant authority"] = -1;
          break;
        default:
          break;
      }
      switch (q10) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Success not related to a strategic priority"] = -1;
          break;
        default:
          break;
      }
      switch (q11) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Not an agency priority"] = -1;
          break;
        default:
          break;
      }
      switch (q12) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 12;
          faults["Funding not available"] = -12;
          break;
        default:
          break;
      }
      // start of the desire questions
      switch (q13) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 5;
          faults["Beneficiary not identified"] = -5;
          break;
        default:
          break;
      }
      switch (q14) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 2;
          faults["No direct access to beneficiary"] = -2;
          break;
        case 'Not Directly':
          perfectScore -= 1;
          faults["No direct access to beneficiary"] = -1;
          break;
        default:
          break;
      }
      switch (q15) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 5;
          faults["No specific need identified"] = -5;
          break;
        default:
          break;
      }
      switch (q16) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Use-case not inspiring"] = -1;
          break;
        default:
          break;
      }
      switch (q17) {
        case 'No':
          break;
        case 'Yes':
          perfectScore -= 5;
          faults["Problems has many problems within it"] = -5;
          break;
        default:
          break;
      }
      switch (q18) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 5;
          faults["No ongoing research"] = -5;
          break;
        default:
          break;
      }
      switch (q19) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 2;
          faults["No similar efforts"] = -2;
          break;
        case 'Not Directly':
          perfectScore -= 1;
          faults["No similar efforts"] = -1;
          break;
        default:
          break;
      }
      switch (q20) {
        case 'Yes, with substantial learnings now applied':
          break;
        case 'Yes, but learning hasn\'t been applied':
          perfectScore -= 1;
          faults["Past attempts, but no learning has been applied"] = -1;
          break;
        case 'No':
          perfectScore -= 2;
          faults["No past attempts"] = -2;
          break;
        default:
          break;
      }
      switch (q21) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 10;
          faults["Solution could not be implemented"] = -10;
          break;
        default:
          break;
      }
      switch (q22) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Organization cannot run test"] = -1;
          break;
        default:
          break;
      }
      switch (q23) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Desired outcome not defined"] = -1;
          break;
        default:
          break;
      }
      switch (q24) {
        case 'Yes':
          break;
        case 'No':
          perfectScore -= 1;
          faults["Change is incremental"] = -1;
          break;
        default:
          break;
      }



      var array = [];
      for (var fault in faults) {
        array.push([fault, faults[fault]]);
      }
      array.sort(function(a, b) {
          return a[1] - b[1];
      });
      var per = (perfectScore / 86) * 100;

      return [perfectScore, array, per];
}
