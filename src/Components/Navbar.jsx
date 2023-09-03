import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://proactive44.github.io/">My Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/prasad-mhaske-88a177247/">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/" className="">
        <img style={{width:'150px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAB6CAMAAADAv8u8AAAA8FBMVEX///9MTU8kodlNTU1SU1UkodokodfX19e0tLX19fUjodxOT1H8/PxMTE1SVFPa2tqkpqfw8PBfYGLIyMjBwsO4uLihy92Vlpby8vLq6upWV1nQ0NAkoN72+vyDg4NaW107mcV6enwio9XP5/Ht9vqgoKCRkZNqamqGhoZxcXMxoM7e7vS62+loaGiTyN7i4uNVrNI/pNB0u9VwtNU0m85Vp8WKv+BUpM1LnMqazOSp2e06n8Var9WBwdhxutfE3upNp9xpvOSAtcmIydxMrsxrt85yr9A0osSd0uZ7v+FUo8hhtdet0N2jx+Sd0d4noczwt14OAAAXu0lEQVR4nO1dCXvayJYVWgohCbFbBguIxC5WGSVpx9vLTM+8JM4b//9/M/dWlUBoAZy4wxeH0922kQqpdHTrbnWrWhDOOOOMM84444cxfe/f+h+MU3fjzeIxsLXg4dS9eLu4J8R116fuxZuFcS+KLlm3T92Pt4r2A7Ft98zvP4X22j7L7z8I4yNxibKenrofbxVTTyGi4iO/vdmnrx//+vr9zPUrokdETdOCm4Xnua6oiO63M72viQsiuq6i4X+KQrzrU/fnLWC6sWbtTy54v7YGPoQmuu8fT9mrt4Lp7d899seNH4i2qIEChn/uZmcf4jVg3Lke8Dt98ohma5oL3Cq39/1zAuKVMCWa+ABBhSISV7E1W/FmZ25fDcZU0TRQuWDVvFsfhNd9OnWX3g7aj3fEI4T861+r+9ljX7gDqr+fulNvBr2nIPj82Vbu+Of2SiRe76Rdejtof/WUjz2IJsiMH5m6hPgn7dPbwXQVeBdgxRbuanPItZVzMPEqmPrutz7+8f2vxeaYq5Evp+vSG8KngKz68YMLInqn6Mxbg3ETiHcJdoUHQm5P0Js3hy8e1ww7aK+Ie3+C3rw19DzXT7Ir9CG6mCUPn/EyTJ81Ly0fNiVucM7k/Cz6Pgku0k7caN45ZPtZGA8uuUsV0v+6T9EYZ7wMM+J66bM857mfn8ejp5FU1XDGKwCcLyVdNZzx80DFG6TkxAq1RqM8GG9Q+/Vdewt49FzlJn7QUEd6zszlijlJknI5/Fk+Red+e7Tv3E1yN0RhIBVzOR15zeVM/FWUpKuTdO93x42rxFVDvcpENgJJqp6me785eoFCYkmFgSSl0Ns4Tf9+c3wTlViuwdJzei6O4lnz/gi+eFqwm2uwOKE6chzyrJ/Z/RH0faJ93TlS5ozq/F/UE6ZzNms/hAVRgp24t2QWQ5GV52q9Xq/VamdufxC9QBN37FqhykxaMVeclE7Vq7cCY62J3o5dK3PRlST1XPb0s+h5rrsTrxlVbsrMsxv28wie3dVOKqceumHqqbr0hvBdFGPzaOMi8xkmhRN16Q1h6hF7V3gFs8icsvyJuvSW8EAUcVd48xKT3vnZrP00egHRYuFwQ2LSOzxRl94Q2itFU/5795jKfDKpfpouvSXMPFvzYrPAIb2/4bxE+/uN71HcXfSzJraM3sWKtiHBQ2z94637OVzgYLS/L/yAXcwLAvGWt2zPFnALPOEvDq3iaa9cO5aINAo0m1OUJKuRAA+MC6XyyJRYHkJdRlV0oapPGuGBijps0VZSsQjXk7ifV6hbXfptsztsVNK6VSnPo9lQydr/FGHPe2uPaHTBAi5j8tLXMPUXdwGufHQJgYFLgnW01a2tiQ9Teq0HT7OJC5dTAC7RWNZgeu8rNq6hBIhBQPYXKFx4RHyOtlhaI56ITMtH5gbs4auRQ3rOudoSXIBT0oRydjWWd1PFTNs0h3KYLMK3aI6X8U4VBjtfhK8OjmG3D0aaECKKCjw6LsAjZJWYO2zPfKQVSbOhka0oIlltJfjfiihqH/tCfw2hFgFeRQa48m0fX41n24RohAIOuyL5mk1w34d3vdh+rnRiDxaDjlSo3QTvk40Lh/QWi/OCsHRibYqSfAnnx3rsaFHqNHc6VRrF7yrtNkjHJx/owGdmfACJQLF7vfvw/Qe68hEX5Ci0EUJTNuUHviJqtrb+5Iso//SCFDDGgaberUvg5Yn0/aD4wkfb/itzTcQ9tPG2Y2NZTRHYHRoNoenouaRcy+HwLTDBdhqtZCOQwVo1bVB0o1q+GX97Ot72IBagFhgThNOLPzTNjyrXqQ+ssXOsCTaCoe4+cBLgFeEBG1ea2fiyQnq1v2GoB7i0D78pKhQiSjdRvEVqj4RpAD3anlu2dH0vv3KJP3yylT6ubOgNc8QxgBtdS708ML51Ugqj3a/CyVaqft7F9TM+K9cKLjIEn1AwtUimFdgVKbUKiCi8B6QaZBCEOdyuIqDvB+gFam0Fl6dzOX03xSkHuCqhnIr0JdEXCgPBS8ywU6zhvd1uhLfABmWxmMVuKy80q6nk4qHRZUgv192xV9VdClcb0dUjP+kfm+zGYHuY90Q+woMBG0LFEunDEa2gfdOAbvgUmnxh+peIy/k1xiwTTVACIIxANtuOyXO5coE2Cr4e2sj1rqfgY2lMtYt4AqyiKNp4N/ghBmlVpY/wOtxtwFZiD5WYvuSPK3dw4MaPRxjqGMJGOWwkb5OUdwrIbtqV6Y/QC6y0tiehI3pOnhyheKfPBPQs+gKu631cPzw8+XT9s4b2jdwx3dJei9Sq4fAP/LuH9XrloawqKK2uS/WvJ4a6m2oBb3W3Xj9cz6Z0QkexXRfeneu6H5+urx9WYNhsDeiFV5JSmtf+Bm0j2QaLPmgxSS9KYnVYAu6crdjp3Umn40xAn2wk0orTi7TOJ47jdNQS6p7IBecOfHu+NaRFzq8a3lzG7zmd8jFzJH1wL/HRQdb8C/ag/cc7l64oBaYCpv/uccQzW7XuMYs3na0IUGujkFIJDEJXAVkPr0XxXkHJB3eDPN+zw8Z04aHXRtDc3SXMwwycOi+SbWiWODqcArW0wZLmzsrShgynxhRisz4qskEMyqC0Qy84Bd3B1usqbB2ClsUPL8vdjYdWpbew2C306ksmSRYKypBti979VlqMHkowShuh5m3qhe6UHzH17YXH1ku7ykf46Guh+CrKh6jXDGTB4EDDGF140l9TVwK0ixhfNtWGu9vv02yyygd2XOdVeCYNjE0kXjbK4eEiGK8desdRm6Ru/GknMtybnU17qn75LJT8Enb7qOTQAYiVeLe/UcGCKACnaddo6XHQx9KDs2d0gkHb2iBqfsiuLe7Wit4q6CS7bnCzw5hxw8aDpvixEOYej6dufJFFrxXyU9015fXQiOnqll74vhXtyeVGbXd2O9gJIxgqviajd5TWryx8oqNedL149Wz7PepfoDdoC30I1dBlFf24RH3xRIjKIMC4Q8csVA6715p5SC/Yu8SGhB889KDhBe1SCa+cZOyul0FvJdSU1bijVM9xgp0NvXo84dYIp56d+O3GoReHM0+M3uJL6DV8jCGAxeRejO0bj6oEIP4G/4DXkLIweoEOAgS+YJ8CQh1fhfzPbpOPBJWMiwFd/BYroonwbsjudgFfYTSR9KLzDHoboYwmM2lqqA6WW+UQo3HCv91N3m/EicfooSpR+9o9Jk7jeEQrD88YpEWn04unlf8ZJOsaOFM0V0wLAXwwbqBdyAzoRTuXSNG2PRq/KWmjHYvOwfUgwW6fYKhkbL2ZQe+ES2VC/MBszTmn5ZDeorlLUJO5DalZzhJ3VvArjsTV9vHzUBcEEweakhE7MbR9DfMzbuo7uIAzaAb/F3QveBIkGmtRPHoo06L4jX3s9yJ49KmbvKNoUaRJ6q2ETHoZQXpqBSqf/NSdjfSOdxvk+cw+nwG5zEdwVWX5e6kUOifgHVbVfL501HTJe4UGAMreDZTaEKCiYMZrbNlJ0J+ope8wKAY5VtzYGr4Z6leQXxqd9UHdcu8CTaetsXejRLT1AuO9rNedTu+S27WU0Q3CybNg8obe2LvhRVUstbjstHRMURY3YBIP2ropsSgDE5jobSfSaUl8U2gIpuxtNCO4G5Aifk07afyLumy2j8VgGGjEl09/JVSzkE/wd+/fCktW0LSFiEE1ahZF2eZ1pxj0xV2JDdLpvUoXS44W/87GtF3unh9y5Ywqo2bmUiFBXCiMczxjwWoH9cOpXh8eDZ7X3dvogiVnxE+pZz9DAAbS6059VM9ECWLn7zBzA5pFQPcZ/QwGzBrj3xoG2cpmcwZhBeQH6XcSsuitcdWbXiQZKt8lp7cVo3fMGQR68xnsMnqpko5Ez8XJZeoNt/DRtGnu/s08bjRMxbgkPXn4gcYfYOp9TXG1mJkCrDQRFTcIdf9vxcaUcpgw0+hviCDA4wtbL8DHyFgfiNhDLxxOT207XGhrnN5qzDRt6S1MMtjNFZHejYOyOeocsHI+5r3t7c4eqbgB8472PV1B34uYolGQXoJR8rvY+TtmF4HeLyxKYwlJF1MY1KMAejebtfQCGAFB9krAffRmSW9Ib30vvagcGlnsMukFfuNzFQf0A+7PSmxt/3YTnzBks12S6iwZ8IbQHyN9X6EJt3exBl9FmnwEi/eEmXWepUTZBdULv0QMmD+ztn0fNG+6jmfIoJcnHNIf9hC9Qy6TTWGUzBhx6IxeIc+zE5ui7f0R8jcaldqpS8036AcudZ9S9wozAiqT4FYAvZhpfBdrMFOQXoVc9L+BmvWeQ+XLc+3ULwtjxgfsTaZdE7LoLTHvSU9fu3KI3gHPSwzCsDeN3tBqFuoTZt84wSmedgQLSkl8RjaG9jsIe3F+M80Z/c4mhrS1cCum0vsIwx+zxx/b3y8u/nORwH/+c3PD02v3HmaT973qDL83LI1KTREeopdrbn1ilLOxLboyKmp54IQSrO/1fx8hFICRSp7TTk4vLh4evoNBe7JtxQbjlmbQVzaNl8Gt8NPp7aOCRT17cG314hmTzHu38s+gd8QFMLV4x+H0ZdHLHeOX1a3VZc7v3iUdfTb7rpAPiVPGDcqSonn/J9ygYwtKMmUzkE8o+yIt0M+gF1wtlst82h/otL+6rmYr+52YrJxDkY3VVpoqPESvEU6hvajqMlw/s9+4LdC04fRP3Osy7j00OsSG+LTv4cQZOACJbZgeoZEtugqGvD5Jp3fmYUoH3sHe/0VK7ynAKMPfL+MZ9F7K3NjMU/Ith5TDNmuZHpakg4fSB+jtPcNzI0GxdY/9e2rTNTqRZqypAVJE8n6X30ffFmmaLJhRJy+V3vY7nDzGnaGzMxv9RQBvzyZeZkDBkJXvHXBZkpzk1O1BepvhzPxLFiXn+Ts54JpdQ0SA9NrP0VxB/xumKRWw69SeTQOceQQ/ikS3YjJmt7aG8YamfDSQXpy7SDhm4DejcaOp84d02ezf0DoLUER7U0tCNr0FmWpfzLck9MMh5YAvh3keRalDzxVq6mRerVY79ezko3qUcsCUjEj9Vo34IcH9haewmUyRMCd0gakXEXMw3iL0m2YPdPISz1DR96iPl5RewbgjdEoEw91FguD29yfPVegE6H4HJvJQCXoxncUnxiQrxslhei+7G4+spTbV0XaiXh9k6OMaN20H14LOApwwwJlLCGg/3Nx8WXwMMEvpejBaw5UN/VuWLkAdGryDRjcfAixTwOwWRLp0C0cfwj+SDCsEumEATu9TCxe8W3/51GtT9D99uX8XKKy0BAsmDnR1D72bEg+cTq4OyioiT5X9QeWAjnNmjcru/IexbOCFy2MpnKU/lJg0vgYuYVO2mPq1+aQl1jpo2maSvO/bNq3LodV76MeKTNXii2G0eMTGhMG3lHvMcLKfJshoDRW8x3cBAkcE7nuOO8tr3hGbvalcEpMObimcMKNJRJZKLHbLBVyqtSu9aXVLaqx4JLf9OIrkbfIOrqfDm4TFPvvDCkR7TScjMPHqsnShwsqbRC3Y6uNZYNsaEzSRVpG4SC8W5bnXrL8+Vj2Q1CmNNp3IF9HDJhgQY0nQpiQCnTYYO0F6uU6MBj6EU4ZsrZVWpOMUeD59Q6+e6h8MMsW3uHGmjXKiilA/IunbXtMCJdS2IisVYfWlyioaQE19dpolatHO2+gX2+SBSwNEbRB8xLPpvGczD18JvTydXHbDYMOld1OC1VE7OnF6U2XmqovVurHnl8ZGgefT61WWq02NHoxyJr+bIshkGZo+OGbSwrgJiMt8f8y/0IwLiHJs1r2/enY1MSxAxXQtZmyD6/AOtzaYPvI+4x6PdL4YQ0QcHGz6DQAvFqsxg6/HbUTEPYf0+Go5Se7yUJSueATApFfPOamM1Lppss/o5XnOy1bi1LGBSO+OZrCo5FJ7pZHE1LwgoDkjvBCHtRX9rYBjHVmiZGGL9hqNGBav0my6QnUQVeZalsOWBJPerCWDxjAhvkUJVC2mcXUuva204dwcZ8ou0MszReUku4fS6VvMVgTlij08CfzU0vHpB4+aI3SKsaTp3xcRUQjgnSRrriN4XBFaJUiTQDQxiVrCu10cv/G5CuzJexZk5p2EBtYvhQKdagd6dambEjY3eRGKPJ6nlWhL3DuI5Np1PGoeV/cfonex8gNc9xD4nzO3FO3P7lij5+e/rx93RPXbrX9xYIj3bu58ttpCAb8P/lo9zV60qbwqtTr7U6wV1anK2wLTIl02UVDnMkiv3I37xAKeYz6H7oBcl6wRfDsm/3wCOqobdHk+eEG9A0d/SnGg1XTaS2s1nR6zmSPegk/DH75TApXSEQ9lLEulyGQ6/UahVLoslZIRc6ExR3VdzI3CVRjQMvptBNMB0SOl5VET8X866nRNgSS1yn86XUa99toU5Hn5U3H4xy8Ab851Xa++5iYOy3B1/eiPX/9t0KhVfr0NSIzSGHxkvGj3F+wMkVfrYELVptBs1Jr4NPAgNfUKDqk8Kbdkf17SXMlSuMzDWaFOP13SCyDgmw21QL+vNpoGO0olrq6W4JHUK3YxVa0IJbVUYBerRFunPuwSl1QVnSMi0CNR6mCpEyjdbvmItT0/jatWt9kwq5flril368KyJZeEjmzVZATNuan4V7fJjjQqc9M0J82JicCnHph4Gmg0ZQhyliZ+tAwHG1OvfCKXjSG07VInpwuXH8oq3EY2TasEx+WWJYzpLUBAC2ibI+qQuk5659UUZGnCi9JM61eQCxjK46rZyJvmcAwkLlstTm9VHcq0Mk6Vh/mRXK7J80ajsSybo7ylCrVG17QaKL0Dc1RGyZuYcrWA9Krlllxw5EGjQes6gd5mCw6O6fBucXrhRcHFgN6GBV8by0P4KLDpA7074eOm6VAd2XglxWDUR3zeXk4uav2n0OzKpmNY5lgAWstb6R0V6iG9zqA7MeCIOmiAkJpdCwVxzrcMGpgTJHJpdqtyDenFKyK91pA2AHorVbM1YjW0XbnVbXF6yxV4qUK+1b0cy86QKYcSS/fJkzrPhOnyK20xYDQgdqN70koH4pPXxVA2QaLMIf41AHrzAnADqgDGLw3+VLk66XbzVDm0BKEBeqEFFre6oReOzwV4P6o8QXrhew5TDjQjAvQKVx3QAlTTdKmKGTDlkM+jcoBQF5VDi2VcSnz6S++ybMCLVuNko6K2wpz766mao1CSTbBmZrc8kLtLoSp3ylW5AcrBodoQ6bWalPBJpVIxmp1GpWVeRelF6S3MzS5I5hLoHbdaTXhDdWiN54HewrDctEyaS0TdO6bS26xUCqAchvL8Eo/w1pj9iq78Gx2fO8mGsRyGKYXWr9K5G1B6QTuAaYPx2QC5klEVTApzmeaTVRTklspN26CLpu0ySi9WYTXMuTWYmGWg1xjKHWHHtJWqGaYNpNeYgCGk0tsKt4Sod/UiJ7j18vA+gWY9XEKhV8uvcL2X3t7CxUjGclCm+n5ZtvIFoWSVhbxF8yBXlmUNlkLFQuSNpWrVqUmzWL6jbqHSbFgNbDkoWBa2LJVpazxftmpC5criD4aXvLKu+MXg1nj7Qo1+3FiwimUWWW6mOP/JgM3Ij7vhYJiorzEU3gIqHcpJEQvAfsLIV2hmgXJrjvN/enIhgiuce8AN0nXJpBZy2Xix6NUdmZOrt7Km1f9UILMy39d/1GwOJenw1GwERmkgs1rRYlGfnLePigOZHQr1Me5EX8Tqju7xW/VWShYvDwF+54NfFkL8RkB66GYBV8MRelXykTbfaIJOQJGl3FaHZ42bCjO3reLCBVLOMfSChzI3w9XWenVYO2vcDDi5bU20yuLk/WQVrtQqXR/Fg77h8sxtNrB4JpTepqSPOyCSsqOm69F8w5rr4UZnUlGqDo5bmvrnYhBRDhUzVxGagxZdONIalNVGrVIALGsNtVx2qMDqoQ8mj8vn6OEgyhF6jTFdT1mojemOY8XIzk18N5Ei/S1XHfWPn945DmqEXvBiw7GerzmjVqweB3OM3cmknD///wCOxpWeVf9tNJe1wbjjOPP5fAK/hoP6svmr82C/Oy5zB8vrjULhbMB+ELhb0Hmn6X8QZf1M7z+JxlE75J7xoziHXWec8Qvw/0sYF3KsC35PAAAAAElFTkSuQmCC" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
