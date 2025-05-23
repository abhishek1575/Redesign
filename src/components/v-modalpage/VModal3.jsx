import './modal3.css'
const VModal3 =()=>{
    const Group = ({ title, className, children }) => {
      return (
        <div className={`group ${className}`}>
          <div className="group-title">{title}</div>
          <div className="box-list">{children}</div>
        </div>
      );
    };

    const Box = ({ label }) => {
      return <div className="box">{label}</div>;
    };
      
    return (
      <div className="container">
        <Group title="Support Process Group (SUP)" className="organization">
          <Box label="SUP.1 Quality Assurance" />
          <Box label="SUP.8 Configuration Management" />
          <Box label="SUP.9 Problem Resolution Management" />
          <Box label="SUP.10 Change Request Management" />
          <Box label="SUP.11 Machine Learning Data Management" />
        </Group>

        <Group
          title="System Engineering Process Group (SYS)"
          className="primary"
        >
          <Box label="SYS.1 Requirement Elicitation" />
          <Box label="SYS.2 System Requirement Analysis" />
          <Box label="SYS.3 System Architecture Design" />
          <Box label="SYS.4 System Integration and Integration Verification" />
          <Box label="SYS.5 System Verification" />
        </Group>

        <Group
          title="Software Engineering Process Group (SWE)"
          className="primary"
        >
          <Box label="SWS.1 Software Requirement Analysis" />
          <Box label="SWS.2 Software Architecture Design" />
          <Box label="SWS.3 Software Details Design and Unit Construction" />
          <Box label="SWS.4 Software Unit Verification" />
          <Box label="SWS.5 Software Component Verification and Integration Verification" />
          <Box label="SWS.6 Software Verification" />
        </Group>

        <Group
          title="Machine Learning Engineering Process Group (MLE)"
          className="primary"
        >
          <Box label="MLE.1 Machine Learning Requirement Analysis" />
          <Box label="MLE.2 Machine Learning Architecture" />
          <Box label="MLE.3 Machine Learning Training" />
          <Box label="MLE.4 Machine Learning Model Testing" />
        </Group>

        <Group
          title="Hardware Engineering Process Group (HWE)"
          className="primary"
        >
          <Box label="HWE.1 HW Requirement Analysis" />
          <Box label="HWE.2 Hardware Design" />
          <Box label="HWE.3 Verification Against HW Design" />
          <Box label="HWE.4 Verification Against HW Requirement" />
        </Group>

        <Group title="Validation Process Group (VAL)" className="primary">
          <Box label="VAL.1 Validation" />
        </Group>

        <Group title="Management Process Group (MAN)" className="supporting">
          <Box label="MAN.3 Process Management" />
          <Box label="MAN.5 Risk Management" />
          <Box label="MAN.6 Management" />
        </Group>

        <Group
          title="Process Improvement Process Group (PIM)"
          className="supporting"
        >
          <Box label="PIM.3 Process Improvement" />
        </Group>

        <Group title="Reuse Process Group (REU)" className="supporting">
          <Box label="REU.2 Management of Products for Reuse" />
        </Group>

        <Group title="Acquisition Process Group (ACQ)" className="supporting">
          <Box label="ACQ.4 Supplier Monitoring" />
        </Group>

        <Group title="Supply Process Group (SPL)" className="supporting">
          <Box label="SPL.2 Product Release" />
        </Group>
      </div>
    );
}
export default VModal3;