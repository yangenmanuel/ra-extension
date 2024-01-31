window.onload = () => {

  const ra = document.head.innerHTML.match(/RA:\s*'(\d+)'/)

  const table = document.querySelector('.ltTable').children[0]
  
  const content = `<td class="argt">RA</td>
                  <td>
                    <em class="ng-binding">${ra[1]}</em>
                  </td>`
  
  const tr = document.createElement('tr')
  tr.innerHTML = content
  
  table.appendChild(tr)
}
