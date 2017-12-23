
module.exports = function fease(q1,q2,q3,q4,q5,q6,q8) {
    var faults = {
        "Workflow around the problem":0,
        "Outside the scope/authority of the problem owner":0,
        "Description of the bad outcome to be avoided":0,
        "Previous attempts to solve the problem":0,
        "Level of technical readiness":0,
        "Problem // Perception alignment":0,
        "Confidence level":0,
    };

      var total = 100;
      switch (q1) {
        case 'Yes':
          break;
        case 'Sort of':
          total -= 5;
          faults["Workflow around the problem"] = -5;
          break;
        case 'Not Really':
          total -= 10;
          faults["Workflow around the problem"] = -10;
          break;
        case 'Not at all':
          total -= 15;
          faults["Workflow around the problem"] = -15;
          break;
        default:
          break;
      }
      switch (q2) {
        case 'Yes, minimal':
          break;
        case 'Yes, substantial':
          total -= 10;
          faults["Outside the scope/authority of the problem owner"] = -10;
          break;
        case 'No':
          total -= 15;
          faults["Outside the scope/authority of the problem owner"] = -15;
          break;
        case 'Not sure':
          total -= 15;
          faults["Outside the scope/authority of the problem owner"] = -15;
          break;
        default:
          break;
      }
      switch (q3) {
        case 'Yes':
          break;
        case 'Sort of':
          total -= 5;
          faults["Description of the bad outcome to be avoided"] = -5;
          break;
        case 'Not really':
          total -= 10;
          faults["Description of the bad outcome to be avoided"] = -10;
          break;
        case 'Not at all':
          total -= 15;
          faults["Description of the bad outcome to be avoided"] = -15;
          break;
        default:
          break;
      }
      switch (q4) {
        case 'Yes, with substantial learnings now applied ':
          break;
        case 'Yes, but learning haven’t been applied':
          total -= 10;
          faults["Previous attempts to solve the problem"] = -10;
          break;
        case 'No':
          total -= 20;
          faults["Previous attempts to solve the problem"] = -20;
          break;
        default:
          break;
      }
      switch (q5) {
        case 'Existing GOTS options can solve the problem':
          break;
        case 'Existing COTS options can solve the problem':
          total -= 5;
          faults["Level of technical readiness"] = -5;
          break;
        case 'Existing startup option may solve the problem...No previous government clients':
          total -= 10;
          faults["Level of technical readiness"] = -10;
          break;
        case 'Existing startup option may solve the problem...No previous enterprise clients':
          total -= 15;
          faults["Level of technical readiness"] = -15;
          break;
        case 'Existing startup option may solve the problem...No public performance data':
          total -= 18;
          faults["Level of technical readiness"] = -18;
          break;
        case 'Exists in DARPA/I-ARPA projects...No contact with PM':
          total -= 20;
          faults["Level of technical readiness"] = -20;
          break;
        case 'Exists in DARPA/I-ARPA projects...Contact with PM':
          total -= 25;
          faults["Level of technical readiness"] = -25;
          break;
        case 'Only exists in scientific literature...No contact with PI':
          total -= 30;
          faults["Level of technical readiness"] = -30;
          break;
        case 'Only exists in scientific literature...Contact with PI':
          total -= 35;
          faults["Level of technical readiness"] = -35;
          break;
        default:
          break;
      }
      switch (q6) {
        case 'Type I // Type I':
          break;
        case 'Type I // Type II':
          total -= 15;
          faults["Problem // Perception alignment"] = -15;
          break;
        case 'Type II // Type I':
          total -= 10;
          faults["Problem // Perception alignment"] = -10;
          break;
        case 'Type II // Type II':
          break;
        default:
          break;
      }
      switch (q8) {
        case '100%':
          break;
        case '90%':
          total -= 5;
          faults["Confidence level"] = -5;
          break;
        case '80%':
          total -= 10;
          faults["Confidence level"] = -10;
          break;
        case '70%':
          total -= 15;
          faults["Confidence level"] = -15;
          break;
        case '60%':
          total -= 20;
          faults["Confidence level"] = -20;
          break;
        case '50%':
          total -= 25;
          faults["Confidence level"] = -25;
          break;
        case '40%':
          total -= 30;
          faults["Confidence level"] = -30;
          break;
        case '30%':
          total -= 35;
          faults["Confidence level"] = -35;
          break;
        case '20%':
          total -= 40;
          faults["Confidence level"] = -40;
          break;
        case '10%':
          total -= 45;
          faults["Confidence level"] = -45;
          break;
        case '0%':
          total -= 50;
          faults["Confidence level"] = -50;
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


      return [total, array];
}
