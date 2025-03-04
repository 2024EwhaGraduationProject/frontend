import styled from "styled-components";
import { BackIc, LogoTxtIc } from "@assets/index";

export const Container = styled.section<{ $showCodeInput: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: ${({ $showCodeInput }) => ($showCodeInput ? "4rem 2rem 80rem" : "4rem 2rem 60rem")};
  background-color: #f9f9f9;
`;
// ----- 헤더
export const HeaderContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main_bg};
`;

// ----- 뒤로가기버튼
export const BackBtn = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const BackIcon = styled(BackIc)`
  width: 2.7rem;
  height: 2.1rem;
  margin-bottom: 2rem;
`;

// ----- 로고
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTxtIcon = styled(LogoTxtIc)`
  width: 12.28rem;
  height: 3.4668rem;
  margin-bottom: 3rem;
`;

export const LogoTxt = styled.p`
  ${({ theme }) => theme.fonts.LogoTxt};

  margin-bottom: 1rem;
`;

// ----- 입력 필드
export const SignupFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 43rem;
  padding: 8rem 0 0;
`;

export const FieldText = styled.p`
  ${({ theme }) => theme.fonts.Field};

  margin-bottom: 0.5rem;
  color: #696969;
  font-size: 1.2rem;
`;

//-----아이디 필드
export const IdBox = styled.div`
  display: flex;
  align-items: end;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const IdHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IdField = styled.input`
  flex: 1;
  width: 60%;
  padding: 1.2rem 0 1.2rem 1.5rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const DomainText = styled.span`
  ${({ theme }) => theme.fonts.Field};

  margin-left: 0.5rem;
  padding: 0 0 1.2rem;
  color: #495057;
  font-size: 1.3rem;
`;

/**----인증코드 */
export const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1.5rem;
`;

export const SendCodeBtn = styled.button`
  margin-left: 1rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 7px;
  background-color: #8c8c8c;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #197a3a;
    box-shadow: 0 4px 12px rgb(0 10 2 / 40%);
  }

  &:active {
    background-color: #15642f;
  }
`;

export const CodeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CodeField = styled.input<{ $isvalid: boolean }>`
  flex: 1;
  padding: 1.2rem 0 1.2rem 1.5rem;
  border: 2px solid ${({ $isvalid }) => ($isvalid ? "#28a745" : "#ced4da")};
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ $isvalid }) => ($isvalid ? "#28a745" : "#495057")};
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }

  &:disabled {
    background-color: #6c757d;
  }
`;

export const Countdown = styled.span`
  ${({ theme }) => theme.fonts.Field};

  margin-left: 1rem;
  color: #495057;
  font-size: 1.3rem;
`;

//-----패스워드 입력

export const PwBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const PwField = styled.input`
  padding: 1.2rem 0 1.2rem 1.5rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const PwCheckField = styled.input<{ $isvalid: boolean }>`
  padding: 1.2rem 0 1.2rem 1.5rem;
  border: 2px solid ${({ $isvalid }) => ($isvalid ? "#28a745" : "#ced4da")};
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ $isvalid }) => ($isvalid ? "#28a745" : "#495057")};
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const MismatchText = styled.span`
  margin-top: 0.5rem;
  color: #dc3545;
  font-size: 1rem;
`;

export const NicknameBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const NicknameField = styled.input`
  padding: 1.2rem 0 1.2rem 1.5rem;
  border: 2px solid #ced4da;
  border-radius: 8px;
  font-size: 1.4rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #495057;
    outline: none;
    box-shadow: 0 4px 12px rgb(73 80 87 / 20%);
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

export const MandatoryNotice = styled.span`
  color: #dc3545;
  font-size: 0.8rem;
`;

export const SignupBtn = styled.button<{ disabled: boolean }>`
  margin-top: 3rem;
  padding: 1.3rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? "#ced4da" : "#197a3a")};
  color: white;
  font-size: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => !disabled && "#197a3a"};
    box-shadow: ${({ disabled }) => !disabled && "0 4px 12px rgb(0 10 2 / 40%)"};
  }

  &:active {
    background-color: ${({ disabled }) => !disabled && "#28a745"};
  }
`;
