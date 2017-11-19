
module.exports = function fease(q1,q2,q3,q4,q5,q6,q8) {
      var total = 100;
      switch (q1) {
        case 'Yes':
          break;
        case 'Sort of':
          total -= 5;
          break;
        case 'Not Really':
          total -= 10;
          break;
        case 'Not at all':
          total -= 15;
          break;
        default:
          break;
      }
      switch (q2) {
        case 'Yes, minimal':
          break;
        case 'Yes, substantial':
          total -= 10;
          break;
        case 'No':
          total -= 15;
          break;
        case 'Not sure':
          total -= 15;
          break;
        default:
          break;
      }
      switch (q3) {
        case 'Yes':
          break;
        case 'Sort of':
          total -= 5;
          break;
        case 'Not really':
          total -= 10;
          break;
        case 'Not at all':
          total -= 15;
          break;
        default:
          break;
      }
      switch (q4) {
        case 'Yes, with substantial learnings now applied ':
          break;
        case 'Yes, but learning haven’t been applied':
          total -= 10;
          break;
        case 'No':
          total -= 20;
          break;
        default:
          break;
      }
      switch (q5) {
        case 'Existing GOTS options can solve the problem':
          break;
        case 'Existing COTS options can solve the problem':
          total -= 5;
          break;
        case 'Existing startup option may solve the problem...No previous government clients':
          total -= 10;
          break;
        case 'Existing startup option may solve the problem...No previous enterprise clients':
          total -= 15;
          break;
        case 'Existing startup option may solve the problem...No public performance data':
          total -= 18;
          break;
        case 'Exists in DARPA/I-ARPA projects...No contact with PM':
          total -= 20;
          break;
        case 'Exists in DARPA/I-ARPA projects...Contact with PM':
          total -= 25;
          break;
        case 'Only exists in scientific literature...No contact with PI':
          total -= 30;
          break;
        case 'Only exists in scientific literature...Contact with PI':
          total -= 35;
          break;
        default:
          break;
      }
      switch (q6) {
        case 'Type I // Type I':
          break;
        case 'Type I // Type II':
          total -= 15;
          break;
        case 'Type II // Type I':
          total -= 10;
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
          break;
        case '80%':
          total -= 10;
          break;
        case '70%':
          total -= 15;
          break;
        case '60%':
          total -= 20;
          break;
        case '50%':
          total -= 25;
          break;
        case '40%':
          total -= 30;
          break;
        case '30%':
          total -= 35;
          break;
        case '20%':
          total -= 40;
          break;
        case '10%':
          total -= 45;
          break;
        case '0%':
          total -= 50;
          break;
        default:
          break;
      }
      return total;
}
