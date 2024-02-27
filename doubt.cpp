#include <bits/stdc++.h>
using namespace std;
#define N 100005
int t, n, mx;
struct node
{
  int num, pos;
} a[N], b[N], c[N];
bool cmp(node a, node b)
{
  return a.num > b.num;
}
int main()
{
  cin >> t;
  while (t--)
  {
    cin >> n;
    for (int i = 1; i <= n; i++)
      cin >> a[i].num, a[i].pos = i;
    for (int i = 1; i <= n; i++)
      cin >> b[i].num, b[i].pos = i;
    for (int i = 1; i <= n; i++)
      cin >> c[i].num, c[i].pos = i;
    sort(a + 1, a + n + 1, cmp);
    sort(b + 1, b + n + 1, cmp);
    sort(c + 1, c + n + 1, cmp);
    mx = 0;
    for (int i = 1; i <= 3; i++)
      for (int j = 1; j <= 3; j++)
        for (int k = 1; k <= 3; k++)
          if (a[i].pos != b[j].pos && a[i].pos != c[k].pos && b[j].pos != c[k].pos)
          {
            mx = max(mx, a[i].num + b[j].num + c[k].num);
          }
    cout << mx << endl;
  }
}