#include <bits/stdc++.h>
using namespace std;
bool cmp(int a, int b)
{
  return a > b;
}
int main()
{
  vector<int> v = {2, 32, 23, 32, 233, 123, 2323};
  sort(v.begin(), v.end(), cmp);
  for (int i = 0; i < v.size(); i++)
  {
    cout << v[i] << " ";
  }
  return 0;
}